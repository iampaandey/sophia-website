import createApolloClient from "./utils/apollo-client";
import { gql } from "@apollo/client";
import Image from "next/image";
import { Collaborators } from "./components/Collaborators";
import { Button, Link } from "@nextui-org/react";
import SectionHeader from "./components/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Collaborators />
        <About />
      </main>
    </>
  );
}

async function Hero() {
  async function getData() {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query HeroSection {
          heroSection {
            title
            body
            ctaText
            image {
              url
              title
              alt
            }
          }
        }
      `,
    });
    return data;
  }
  const { heroSection } = await getData();

  return (
    <header className="py-12 md:grid md:h-screen md:grid-cols-2 md:grid-rows-1 md:gap-6 ">
      <div>
        <hgroup className="mb-8">
          <h2 className="mb-3 max-w-md text-3xl font-bold">
            {heroSection.title}
          </h2>
          <p>{heroSection.body}</p>
        </hgroup>
        <div className="mb-8 flex flex-col gap-3">
          <Button href="contact" as={Link} color="primary">
            {heroSection.ctaText}
          </Button>
          <Button href="#about" as={Link} color="secondary">
            About Sophia
          </Button>
        </div>
      </div>
      <div className="md:flex md:items-end md:justify-end">
        <figure className="relative h-96 w-full md:h-4/5 md:w-4/5">
          <Image
            src={heroSection.image.url}
            objectFit="cover"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            alt={heroSection.image.alt}
            priority
          />

          <figcaption className="text-right">
            {heroSection.image.title}
          </figcaption>
        </figure>
      </div>
    </header>
  );
}

async function About() {
  async function getData() {
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
        query AboutSection {
          aboutSection {
            title
            body
            ctaText
            image {
              url
              title
              alt
            }
          }
        }
      `,
    });
    return data;
  }

  const { aboutSection } = await getData();

  return (
    <section id="about" className="py-12">
      <figure className="relative h-96">
        <Image
          src={aboutSection.image.url}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          objectFit="cover"
          alt={aboutSection.image.alt}
        />
        <figcaption>{aboutSection.image.title}</figcaption>
      </figure>

      <div className="pt-8">
        <SectionHeader title={aboutSection.title} direction="right">
          <p>Violin, viola and electric violinist</p>
        </SectionHeader>
        <p className="mb-8">{aboutSection.body}</p>

        <Button as={Link} href="contact" color="primary" fullWidth>
          Contact
        </Button>
      </div>
    </section>
  );
}
