import ThemeSwitcher from "../components/ThemeSwitcher.jsx";

export default function Home() {
  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      <div className="flex justify-end">
        <ThemeSwitcher />
      </div>

      {/* rest of your Home content */}
    </div>
  );
}
