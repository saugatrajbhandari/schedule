import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-200px)] items-center">
      <SignUp />
    </div>
  );
}
