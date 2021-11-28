import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IcToggleDownBlue, IcToggleUpBlue } from '../common/Icons';
import { AboutWrapper, ClassContainer, ClassWrapper, Header } from './style';

type student = { authorName: string; authorNumber: string };
type classes = { professor: string; students: Array<student> };
type studentsType = {
  [k: string]: classes;
};

function StudentsByClass() {
  const [students, setStudents] = useState<studentsType | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const getStudentsByClass = async () => {
    const response = await fetch('/api/author/class');
    const data = await response.json();
    setStudents(data.authors);
  };

  useEffect(() => {
    getStudentsByClass();
  }, []);

  return (
    <AboutWrapper>
      <div>졸업자</div>
      {students &&
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((className) => (
          <ClassWrapper key={className} onClick={() => setSelectedClass(className)}>
            <div>만화콘텐츠프로젝트 {className}</div>
            <Header>
              <div>지도교수 {students[className].professor}</div>
              {className === selectedClass ? <IcToggleUpBlue /> : <IcToggleDownBlue />}
            </Header>
            <ClassContainer visible={className === selectedClass}>
              {students[className].students.map((student) => (
                <Link key={student.authorNumber} to={`/author/${student.authorNumber}`}>
                  {student.authorName}
                </Link>
              ))}
            </ClassContainer>
          </ClassWrapper>
        ))}
    </AboutWrapper>
  );
}

export default StudentsByClass;
