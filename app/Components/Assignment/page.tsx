// pages/index.tsx
'use client'
import './assignment.css'
import React, { useState } from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const toggleContentSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const handleUploadQuestionsFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const questionsFile = (event.target as HTMLFormElement).questionsFile.files[0];
    if (questionsFile) {
      alert(`File Uploaded Successfully:\nFile Name: ${questionsFile.name}\nFile Size: ${questionsFile.size} bytes`);
    } else {
      alert('Please choose a file to upload.');
    }
  };

  const handleAssignmentFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const studentName = form.studentName.value;
    const studentRollNumber = form.studentRollNumber.value;
    const assignmentTitle = form.assignmentTitle.value;
    const assignmentDescription = form.assignmentDescription.value;
    const assignmentFile = form.assignmentFile.files[0];

    if (studentName && studentRollNumber && assignmentTitle && assignmentDescription && assignmentFile) {
      alert('Assignment submitted successfully!');
      form.reset();
    } else {
      alert('Please fill in all the required fields and upload your assignment.');
    }
  };

  return (
    <div>
      <Head>
        <title>Assignment Management System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container">
        <div className='phase'>
        <h2 className="text-center">ASSIGNMENT MANAGEMENT</h2>
        
        <div className="btn-container">
          <button type="button" className="btn btn-primary" onClick={() => toggleContentSection('uploadQuestionsContent')}>Upload Assignment Questions</button>
          <button type="button" className="btn btn-primary" onClick={() => toggleContentSection('submitAssignmentContent')}>Submit Assignment</button>
          <button type="button" className="btn btn-primary" onClick={() => toggleContentSection('analyzeSubmissionsContent')}>Analyze Submissions</button>
          <button type="button" className="btn btn-primary" onClick={() => toggleContentSection('markAssignmentsContent')}>Mark Assignments</button>
        </div>
        </div>

        <div id="uploadQuestionsContent" className={`content-section ${activeSection === 'uploadQuestionsContent' ? 'active' : ''}`}>
          <h2>Upload Assignment Questions</h2>
          <form id="uploadQuestionsForm" onSubmit={handleUploadQuestionsFormSubmit}>
            <div className="form-group">
              <label htmlFor="questionsFile">Choose File</label>
              <input type="file" className="form-control-file" id="questionsFile" name="questionsFile" required />
            </div>
            <button type="submit" className="btn-upload">Upload File</button>
          </form>
        </div>

        <div id="submitAssignmentContent" className={`content-section ${activeSection === 'submitAssignmentContent' ? 'active' : ''}`}>
          <h2>Submit Assignment</h2>
          <p>Students can submit their assignments using the form below:</p>
          <form id="assignmentForm" onSubmit={handleAssignmentFormSubmit}>
            <div className="form-group">
              <label htmlFor="studentName">Student Name</label>
              <input type="text" className="form-control" id="studentName" name="studentName"  required />
            </div>
            <div className="form-group">
              <label htmlFor="studentRollNumber">Roll Number</label>
              <input type="text" className="form-control" id="studentRollNumber" name="studentRollNumber"  required />
            </div>
            <div className="form-group">
              <label htmlFor="assignmentTitle">Assignment Title</label>
              <input type="text" className="form-control" id="assignmentTitle" name="assignmentTitle"  required />
            </div>
            <div className="form-group">
              <label htmlFor="assignmentDescription">Description</label>
              <textarea className="form-control" id="assignmentDescription" name="assignmentDescription" rows={3}  required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="assignmentFile">Upload Assignment</label>
              <input type="file" className="form-control-file" id="assignmentFile" name="assignmentFile" required />
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>

        <div id="analyzeSubmissionsContent" className={`content-section ${activeSection === 'analyzeSubmissionsContent' ? 'active' : ''}`}>
          <h2>Analyze Submissions</h2>
          <p>View and analyze the submissions received from students.</p>
        </div>

        <div id="markAssignmentsContent" className={`content-section ${activeSection === 'markAssignmentsContent' ? 'active' : ''}`}>
          <h2>Mark Assignments</h2>
          <p>Mark and provide feedback on student assignments.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

