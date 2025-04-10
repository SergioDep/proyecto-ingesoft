import LoginForm from "@/app/(auth)/_shared/components/forms/LoginForm";
import MyLogo from "@/app/(base)/_shared/components/icons/MyLogo";
import { ModeToggle } from "@/app/(base)/_shared/components/ui-extended/mode-toggle";

export const runtime = "edge";

export default function Page() {
  return (
    <main className="container relative flex h-full min-h-svh max-w-none items-center justify-center">
      <ModeToggle className="absolute right-0 top-0 m-4" />
      <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center space-y-6 xl:px-8">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <MyLogo className="mr-2 h-10 w-10" />
          My App
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
