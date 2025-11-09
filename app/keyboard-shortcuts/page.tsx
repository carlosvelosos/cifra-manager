"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useKeyboardShortcutsSettings } from "@/lib/keyboard-shortcuts-context";
import { useKeyboardNavigation } from "@/lib/hooks/use-keyboard-navigation";
import {
  Keyboard,
  ArrowLeft,
  ArrowRight,
  Info,
  CheckCircle2,
  Music,
  Settings,
} from "lucide-react";
import Link from "next/link";
import FloatingMenu from "@/components/floating-menu";

export default function KeyboardShortcutsPage() {
  const {
    enabled,
    setEnabled,
    useCtrlModifier,
    setUseCtrlModifier,
    useAltModifier,
    setUseAltModifier,
  } = useKeyboardShortcutsSettings();

  const { totalSongs } = useKeyboardNavigation();
  const [testMessage, setTestMessage] = useState<string>("");

  const handleTestShortcut = () => {
    if (!enabled) {
      setTestMessage("❌ Keyboard shortcuts are disabled. Enable them first!");
    } else if (!useCtrlModifier && !useAltModifier) {
      setTestMessage(
        "❌ No modifier keys selected. Enable at least one modifier!"
      );
    } else {
      const modifiers = [];
      if (useCtrlModifier) modifiers.push("Ctrl");
      if (useAltModifier) modifiers.push("Alt");
      setTestMessage(
        `✅ Press ${modifiers.join(
          " or "
        )} + Arrow keys on a song page to test!`
      );
    }
    setTimeout(() => setTestMessage(""), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-2">
            <Keyboard className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            Keyboard Shortcuts
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Navigate through songs quickly using keyboard shortcuts. Configure
            your preferred modifier keys and enable/disable the feature.
          </p>
        </div>

        {/* Status Card */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              Current Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">
                  Keyboard Shortcuts
                </div>
                <div className="text-sm text-gray-600">
                  {enabled ? "Enabled and active" : "Currently disabled"}
                </div>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  enabled
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {enabled ? "ON" : "OFF"}
              </div>
            </div>

            {totalSongs > 0 && (
              <div className="flex items-center gap-2 text-sm text-gray-600 p-3 bg-blue-50 rounded-lg">
                <Music className="w-4 h-4 text-blue-600" />
                <span>
                  {totalSongs} songs available for navigation across all artists
                </span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Settings Card */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Enable/Disable Toggle */}
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="space-y-1">
                <Label htmlFor="enable-shortcuts" className="text-base">
                  Enable Keyboard Shortcuts
                </Label>
                <p className="text-sm text-gray-600">
                  Turn on keyboard navigation for song pages
                </p>
              </div>
              <Switch
                id="enable-shortcuts"
                checked={enabled}
                onCheckedChange={setEnabled}
              />
            </div>

            {/* Modifier Keys Section */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Modifier Keys
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Choose which modifier keys to use with arrow keys for
                  navigation. At least one must be enabled.
                </p>
              </div>

              <div className="space-y-3">
                {/* Ctrl Modifier */}
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border-2 border-transparent hover:border-blue-200 transition-colors">
                  <div className="space-y-1">
                    <Label
                      htmlFor="ctrl-modifier"
                      className="text-base flex items-center gap-2"
                    >
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">
                        Ctrl
                      </kbd>
                      Modifier
                    </Label>
                    <p className="text-sm text-gray-600">
                      Use Ctrl + Arrow keys (⌘ Command on Mac)
                    </p>
                  </div>
                  <Switch
                    id="ctrl-modifier"
                    checked={useCtrlModifier}
                    onCheckedChange={setUseCtrlModifier}
                    disabled={!enabled || (!useCtrlModifier && !useAltModifier)}
                  />
                </div>

                {/* Alt Modifier */}
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border-2 border-transparent hover:border-blue-200 transition-colors">
                  <div className="space-y-1">
                    <Label
                      htmlFor="alt-modifier"
                      className="text-base flex items-center gap-2"
                    >
                      <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs">
                        Alt
                      </kbd>
                      Modifier
                    </Label>
                    <p className="text-sm text-gray-600">
                      Use Alt + Arrow keys (⌥ Option on Mac)
                    </p>
                  </div>
                  <Switch
                    id="alt-modifier"
                    checked={useAltModifier}
                    onCheckedChange={setUseAltModifier}
                    disabled={!enabled || (!useCtrlModifier && !useAltModifier)}
                  />
                </div>
              </div>

              {!useCtrlModifier && !useAltModifier && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                  ⚠️ At least one modifier key must be enabled
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* How to Use Card */}
        <Card className="border-2 border-blue-100 bg-blue-50/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Info className="w-5 h-5" />
              How to Use
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  1
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 mb-1">
                    Navigate to a Song Page
                  </div>
                  <p className="text-sm text-gray-600">
                    Open any song page from an artist&apos;s collection.
                    Keyboard shortcuts only work on individual song pages.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  2
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 mb-1">
                    Hold Modifier Key
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Press and hold one of your enabled modifier keys:
                  </p>
                  <div className="flex gap-2">
                    {useCtrlModifier && (
                      <kbd className="px-3 py-1.5 bg-slate-100 border border-gray-300 rounded text-sm">
                        Ctrl
                      </kbd>
                    )}
                    {useAltModifier && (
                      <kbd className="px-3 py-1.5 bg-slate-100 border border-gray-300 rounded text-sm">
                        Alt
                      </kbd>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  3
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 mb-1">
                    Use Arrow Keys
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    While holding the modifier key, press:
                  </p>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded">
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-sm font-medium">Previous Song</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded">
                      <ArrowRight className="w-4 h-4" />
                      <span className="text-sm font-medium">Next Song</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  4
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 mb-1">
                    View Navigation Info
                  </div>
                  <p className="text-sm text-gray-600">
                    A navigation indicator will appear at the bottom of the
                    screen showing the current song, next song, and previous
                    song information.
                  </p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                Features
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>
                    Navigate across all songs sequentially, regardless of artist
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>
                    Navigation stops at boundaries (no wraparound from last to
                    first song)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>
                    Shortcuts are disabled when typing in search boxes or input
                    fields
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>
                    Works seamlessly with existing song navigation features
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Test Section */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Test Your Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              Click the button below to verify your current configuration and
              get testing instructions.
            </p>
            <Button
              onClick={handleTestShortcut}
              className="w-full"
              variant="outline"
            >
              <Keyboard className="w-4 h-4 mr-2" />
              Test Keyboard Shortcuts
            </Button>
            {testMessage && (
              <div
                className={`p-3 rounded-lg text-sm ${
                  testMessage.startsWith("✅")
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {testMessage}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Back Link */}
        <div className="flex justify-center">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <FloatingMenu />
    </div>
  );
}
