"use client";

import {
  Bell,
  Home,
  HelpCircle,
  Settings,
  Shield,
  Mail,
  User,
  FileText,
  Lock,
} from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

function DefaultDemo() {
  const tabs = [
    { title: "Dashboard", icon: Home },
    { title: "Notifications", icon: Bell },
    { type: "separator" as const },
    { title: "Settings", icon: Settings },
    { title: "Support", icon: HelpCircle },
    { title: "Security", icon: Shield },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs tabs={tabs} />
    </div>
  );
}

function CustomColorDemo() {
  const tabs = [
    { title: "Profile", icon: User },
    { title: "Messages", icon: Mail },
    { type: "separator" as const },
    { title: "Documents", icon: FileText },
    { title: "Privacy", icon: Lock },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ExpandableTabs
        tabs={tabs}
        activeColor="text-blue-500"
        className="border-blue-200 dark:border-blue-800"
      />
    </div>
  );
}

export default function TestFloatingMenuPage() {
  return (
    <div className="container mx-auto p-8 space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">Default Demo</h2>
        <DefaultDemo />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Custom Color Demo</h2>
        <CustomColorDemo />
      </div>
    </div>
  );
}
