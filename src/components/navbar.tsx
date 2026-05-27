"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeSelector } from "@/components/themes/selector";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "@/lib/auth/client";
import { ds } from "@/lib/design-system";

export function NavBar() {
  const { data: session, isPending } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className={ds.layout.navbar}>
      <Link href="/">
        <div className="flex items-center">
          <Image
            className="lg:h-7 lg:w-auto"
            src="/logo-dark.svg"
            alt="Neon logo"
            width={88}
            height={24}
            priority
          />
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeSelector />
        {isPending ? (
          <Button variant="secondary" disabled>
            Loading...
          </Button>
        ) : session?.user ? (
          <Button variant="secondary" onClick={handleSignOut}>
            Sign Out
          </Button>
        ) : (
          <Button variant="default" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
