/**
 * Chord Diagram Component - Storybook Stories
 */

import type { Meta, StoryObj } from "@storybook/react";
import { ChordDiagram } from "@/components/chord-diagram";
import type { ChordPosition } from "@/lib/chord-diagram-renderer";

const meta = {
  title: "Components/ChordDiagram",
  component: ChordDiagram,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChordDiagram>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example chord positions
const CMajorOpen: ChordPosition = {
  frets: [-1, 3, 2, 0, 1, 0],
  fingers: [0, 3, 2, 0, 1, 0],
  baseFret: 1,
  barres: [],
};

const CMinor: ChordPosition = {
  frets: [-1, 3, 1, 0, 1, 3],
  fingers: [0, 3, 2, 0, 1, 4],
  baseFret: 1,
  barres: [],
};

const AminorBarre: ChordPosition = {
  frets: [1, 1, 3, 3, 2, 1],
  fingers: [1, 1, 3, 4, 2, 1],
  barres: [1],
  capo: true,
  baseFret: 3,
};

const FMajorBarre: ChordPosition = {
  frets: [1, 3, 3, 2, 1, 1],
  fingers: [1, 3, 4, 2, 1, 1],
  barres: [1],
  capo: true,
  baseFret: 1,
};

const Gmajor: ChordPosition = {
  frets: [3, 2, 0, 0, 0, 3],
  fingers: [3, 2, 0, 0, 0, 4],
  baseFret: 1,
  barres: [],
};

export const CMajor: Story = {
  args: {
    position: CMajorOpen,
    chordName: "C Major",
  },
};

export const CMinorChord: Story = {
  args: {
    position: CMinor,
    chordName: "C Minor",
  },
};

export const AminorWithBarre: Story = {
  args: {
    position: AminorBarre,
    chordName: "A Minor (Barre)",
  },
};

export const FMajorWithBarre: Story = {
  args: {
    position: FMajorBarre,
    chordName: "F Major (Barre)",
  },
};

export const GmajorChord: Story = {
  args: {
    position: Gmajor,
    chordName: "G Major",
  },
};

export const CustomSize: Story = {
  args: {
    position: CMajorOpen,
    chordName: "C Major (Large)",
    config: {
      stringWidth: 60,
      fretHeight: 40,
      padding: 35,
    },
    className: "w-80",
  },
};

export const CompactSize: Story = {
  args: {
    position: CMajorOpen,
    chordName: "C Major (Small)",
    config: {
      stringWidth: 35,
      fretHeight: 22,
      padding: 15,
    },
    className: "w-48",
  },
};

export const MultipleChords: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-8 bg-gray-50 rounded-lg">
      <ChordDiagram position={CMajorOpen} chordName="C Major" />
      <ChordDiagram position={CMinor} chordName="C Minor" />
      <ChordDiagram position={Gmajor} chordName="G Major" />
      <ChordDiagram position={AminorBarre} chordName="A Minor" />
      <ChordDiagram position={FMajorBarre} chordName="F Major" />
      <ChordDiagram
        position={CMajorOpen}
        chordName="C Major 2"
        config={{
          stringWidth: 35,
          fretHeight: 22,
          padding: 15,
        }}
      />
    </div>
  ),
};

export const DarkMode: Story = {
  args: {
    position: CMajorOpen,
    chordName: "C Major",
    className: "bg-gray-900 p-8 rounded-lg",
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900 p-8">
        <Story />
      </div>
    ),
  ],
};
