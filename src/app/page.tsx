"use client";
import Button from "@/components/atoms/Button";
import Container from "@/components/atoms/Container";
import Icon from "@/components/atoms/Icon";
import Typography from "@/components/atoms/Typography";
import Header from "@/components/organisms/Header";

export default function Home() {
  return (
    <>
      <Header title="Event" withBack />
      <Container padding={40}>
        <Typography>Event Schedule: 24 Oktober 2021, 16:30</Typography>
        <br />
        <Button variant="primary" onClick={() => alert("primary")}>
          Primary
        </Button>
        <Button variant="secondary">Preview</Button>
        <Icon icon="left-arrow" />
      </Container>
    </>
  );
}
