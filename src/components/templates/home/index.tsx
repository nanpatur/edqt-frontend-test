"use client";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Typography from "@/components/atoms/Typography";
import { useRouter } from "next/navigation";

const HomeTemplate = () => {
  const router = useRouter();
  return (
    <Container
      $padding={100}
      $display="flex"
      $alignItems="center"
      $flexDirection="column"
      $gap={24}
    >
      <Container
        $display="flex"
        $alignItems="center"
        $gap={8}
        $flexDirection="column"
      >
        <Typography as="h1" $size={32}>
          Welcome to Assestment Task Eduqat <b>Result</b>
        </Typography>
        <Typography>Created by Nandira Paturohman</Typography>
        <Typography>
          Source Code and Docs:{" "}
          <a
            href="https://github.com/nanpatur/edqt-frontend-test"
            target="_blank"
          >
            <Typography $color="purple">
              https://github.com/nanpatur/edqt-frontend-test
            </Typography>
          </a>
        </Typography>
      </Container>
      <Button onClick={() => router.push("/events")}>
        Go to Events Page {">"}
      </Button>
    </Container>
  );
};

export default HomeTemplate;
