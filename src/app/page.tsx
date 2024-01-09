import ImageOverLaySection from "@/components/ImageOverLaySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ImageOverLaySection src="https://via.placeholder.com/600x400">
        <div>children</div>
      </ImageOverLaySection>
    </main>
  );
}
