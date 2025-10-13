// src/features/profile/pages/ProfilePage.tsx
import ProfileCard from "@/features/user/view/profile";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfilePage() {

  return (
    <div className="min-h-screen w-screen bg-muted flex justify-center py-10 px-4">
        <Link to="/" className="fixed top-0 left-0"><ArrowLeft size={40}/></Link>
        <ProfileCard />
    </div>
  );
}
