"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./home.module.css";
import {
  defaultFontSize,
  defaultPadding,
  fontLarge,
  fontXL,
  fontXXL,
  fontXXXL,
} from "@/interfaces/DefaultVariables";
import Card from "antd/es/card/Card";
import { Col, Row } from "antd";

export default function Home() {
  const router = useRouter();

  const handleRouteSwitch = (path: string) => {
    router.push(path);
  };

  return (
    <main className={styles.home}>
      <div className={styles.header}>
        <p>
          Welcome to the Jungle!!! <br />
          <span style={{ fontWeight: 10, fontSize: fontLarge }}>
            You Undead Wanderer
          </span>
        </p>
        <div className={styles.icon}>
          <Image
            src="/images/icons/atom-icon.jpg"
            alt="Alphabet Logo"
            className="dark:invert"
            width={50}
            height={50}
            priority
          />
        </div>
      </div>

      <div className={styles.namespace}>
        <p style={{ fontSize: defaultFontSize + 5 }}>
          Sebástian <br />
          <span style={{ fontWeight: defaultPadding, fontSize: fontXXXL }}>
            Bennett
          </span>
          &nbsp;
        </p>
        <p></p>
      </div>

      <div className={styles.body}>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.body}>
        <Col>
          <Row style={{ marginTop: 25 }}>
            <Card
              style={{ width: "45%", margin: "auto" }}
              cover={
                <img alt="example" src="/images/background/wallpaper4.jpg" />
              }
            >
              <a
                onClick={() => handleRouteSwitch("/profile")}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Profile{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Discover detailed insights into my skills and experiences.
                </p>
              </a>
            </Card>

            <Card
              style={{ width: "45%", margin: "auto" }}
              cover={
                <img alt="example" src="/images/background/wallpaper4.jpg" />
              }
            >
              <a
                onClick={() => handleRouteSwitch("/profession")}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Profession{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Learn about my professional journey and key projects!
                </p>
              </a>
            </Card>
          </Row>

          <Row style={{ marginTop: 25 }}>
            <Card
              style={{ width: "45%", margin: "auto" }}
              cover={
                <img alt="example" src="/images/background/wallpaper4.jpg" />
              }
            >
              <a
                onClick={() => handleRouteSwitch("/education")}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Education{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Explore my educational background and certifications.
                </p>
              </a>
            </Card>

            <Card
              style={{ width: "45%", margin: "auto" }}
              cover={
                <img alt="example" src="/images/background/wallpaper4.jpg" />
              }
            >
              <a
                onClick={() => handleRouteSwitch("/resume")}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Volunteer{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                  View and download my complete resumé for more information.
                </p>
              </a>
            </Card>
          </Row>
          <Row style={{ marginTop: 25 }}>
            <Card
              style={{ width: "45%", margin: "auto" }}
              cover={
                <img alt="example" src="/images/background/wallpaper4.jpg" />
              }
            >
              <a
                onClick={() => handleRouteSwitch("/profile")}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Religious{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Discover detailed insights into my skills and experiences.
                </p>
              </a>
            </Card>

            <Card
              style={{ width: "45%", margin: "auto" }}
              cover={
                <img alt="example" src="/images/background/wallpaper4.jpg" />
              }
            >
              <a
                onClick={() => handleRouteSwitch("/profession")}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Designs{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Learn about my professional journey and key projects!
                </p>
              </a>
            </Card>
          </Row>

          <Row style={{ marginTop: 25 }}>
            <Card
              style={{ width: "45%", margin: "auto" }}
              cover={
                <img alt="example" src="/images/background/wallpaper4.jpg" />
              }
            >
              <a
                onClick={() => handleRouteSwitch("/education")}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Music{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  Explore my educational background and certifications.
                </p>
              </a>
            </Card>

            <Card
              style={{ width: "45%", margin: "auto" }}
              cover={
                <img alt="example" src="/images/background/wallpaper4.jpg" />
              }
            >
              <a
                onClick={() => handleRouteSwitch("/resume")}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold">
                  Books{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                  View and download my complete resumé for more information.
                </p>
              </a>
            </Card>
          </Row>
        </Col>
      </div>
    </main>
  );
}
