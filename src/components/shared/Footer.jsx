export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-zinc-50 py-8 dark:border-zinc-800 dark:bg-zinc-950 mt-auto">
      <div className="container mx-auto max-w-5xl px-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Velvet. All rights reserved.</p>
      </div>
    </footer>
  );
}
