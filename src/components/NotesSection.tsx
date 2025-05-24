import React, { useState, useEffect } from 'react';
import '../styles/NotesSection.css';

const NotesSection: React.FC = () => {
  const [notes, setNotes] = useState<string>(() => {
    // Initialize notes from localStorage if available
    const savedNotes = localStorage.getItem('focusRoomNotes');
    return savedNotes || '';
  });

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('focusRoomNotes', notes);
  }, [notes]);

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  return (
    <div className="notes-section">
      <h3>Quick Notes</h3>
      <textarea
        value={notes}
        onChange={handleNotesChange}
        placeholder="Write your thoughts, tasks, or study notes here..."
        className="notes-textarea"
      />
    </div>
  );
};

export default NotesSection; 