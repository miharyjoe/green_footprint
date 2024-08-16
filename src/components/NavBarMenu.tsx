import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import LeafIcon from "@/app/home/components/leafIcon"

export function NavBarMenu() {
  return (
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/home" className="flex items-center justify-center" prefetch={false}>
             <LeafIcon className="size-12 text-primary" />
            <span className="px-2 text-sm">Green Footprint</span>
        </Link>
          <Link
            href="/compute"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Calculate
          </Link>
          <Link
            href="/leaderboard"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Leaderboard
          </Link>
          <Link
            href="/activity"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Compenser
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
             <LeafIcon className="size-12 text-primary" />
                <span className="sr-only">Green Footprint</span>
              </Link>
              <Link
                href="/compute"
                className="text-muted-foreground hover:text-foreground"
              >
                Calculate
              </Link>
              <Link
                href="/leaderboard"
                className="text-muted-foreground hover:text-foreground"
              >
                Leaderboards
              </Link>
              <Link
                href="/activity"
                className="text-muted-foreground hover:text-foreground"
              >
                Compenser
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex-1 sm:flex-initial">
          <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
            <Link
                href="/Profile"
                className="text-muted-foreground hover:text-foreground"
              >
                My Account
              </Link>
                </DropdownMenuLabel>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          </div>

        </div>
      </header>
  )
}
