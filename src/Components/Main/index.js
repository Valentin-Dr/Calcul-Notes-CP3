import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';

function Main() {
    const [subjects, addSubject] = useState([]);
    const [value, setValue] = useState('');
    const [gradeValue, setGradeValue] = useState('');
    const [average, setAverage] = useState();
    // Adds the subject to the array of subjects
    const handleSubjectSubmit = (e) => {
      e.preventDefault();
      addSubject([...subjects, { id: uuidv4(), value, gradeValue: parseInt(gradeValue, 10) }]);
      setValue('');
      setGradeValue('');
    };
    const deleteSubject = (id) => {
      const newSubjects = subjects.filter(subject => subject.id !== id);
      addSubject(newSubjects);
    };
    const allSubjects = subjects.map(subject => {
      // Return the subject infos
      return (
        <div
          className="subject"
          id={subject.value}
          key={subject.id}>
          <div
            onClick={() => deleteSubject(subject.id)}
            className="subject-delete"
          />
          <p className="subject-title">{subject.value}</p>
          <p>{subject.gradeValue}</p>
        </div>
        );
    });
    return (
      <div className="App">
        <header className="header">
          <h1>Calcul de notes</h1>
          <p>Notes rentrées : {subjects.length}</p>
          {subjects.length > 0 && (
            <button
              onClick={() => {
                setAverage(
                  subjects.map(({ gradeValue }) => gradeValue).reduce((acc, curr) => acc + curr, 0) / subjects.length
                )
              }}
            >
              Calculer la moyenne
            </button>
          )}
          {average && (<p>Moyenne : {average}</p>)}
        </header>
        <form
          className="subject-form"
          onSubmit={handleSubjectSubmit}
        >
          <div className="groupInputs">
            <input
              type="text"
              placeholder="Entrez une matière"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <input
              type="number"
              placeholder="Entrez la note"
              required={true}
              value={gradeValue}
              onChange={(e) => setGradeValue(e.target.value)}
            />
          </div>
          <button
            type="submit"
          >
            Confirmer
          </button>
        </form>
        <div
          className="allSubjects"
        >
          {allSubjects}
        </div>
      </div>
    );
  }
  
  export default Main;