import { memo } from 'react';

interface NotesSectionProps {
  notes: string[];
  timeEstimate: string;
  crewSize: number;
}

export const NotesSection = memo(({ notes, timeEstimate, crewSize }: NotesSectionProps) => (
  <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
    <h3 className="text-lg font-semibold text-blue-800 mb-3">📋 Project Details</h3>
    <div className="grid grid-cols-2 gap-3 mb-3">
      <div className="bg-white rounded-lg p-3 text-center">
        <p className="text-xs text-gray-500">Time Estimate</p>
        <p className="font-bold text-gray-800">{timeEstimate}</p>
      </div>
      <div className="bg-white rounded-lg p-3 text-center">
        <p className="text-xs text-gray-500">Crew Size</p>
        <p className="font-bold text-gray-800">{crewSize} people</p>
      </div>
    </div>
    {notes.length > 0 && (
      <ul className="space-y-1">
        {notes.map((note, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-blue-700">
            <span>•</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
));
