//https://exercism.org/tracks/typescript/exercises/grade-school/

/*
Instructions
Given students' names along with the grade that they are in, create a roster for the school.

In the end, you should be able to:

Add a student's name to the roster for a grade

Get a list of all students enrolled in a grade

Get a sorted list of all students in all grades. Grades should sort as 1, 2, 3, etc., 

Note that all our students only have one name. (It's a small town, what do you want?)
*/

export class GradeSchool {
  private students: Record<number, string[]>;

  constructor() {
    this.students = {};
  }

  public roster() {
    const currentList = Object.entries(this.students);
    const deepCopy = currentList.map(([grade, names]) => {
      return [grade, [...names]];
    });
    const roster = Object.fromEntries(deepCopy);
    return roster;
  }

  public add(name: string, grade: number) {
    const existingNames = Object.values(this.students).flat();
    if (existingNames.includes(name)) {
      const rosterArray = Object.entries(this.students);
      for (let i: number = 0; i < rosterArray.length; i++) {
        if (rosterArray[i].flat().includes(name)) {
          const existingGrade = Number(rosterArray[i][0]);
          const currentGradeStudents = Array.from(this.students[existingGrade]);
          const indexToRemove = currentGradeStudents.indexOf(name);
          const newGradeStudents = [
            ...currentGradeStudents.slice(0, indexToRemove),
            ...currentGradeStudents.slice(indexToRemove + 1),
          ];
          this.students = {
            ...this.students,
            [existingGrade]: newGradeStudents,
          };
          break;
        }
      }
      this.add(name, grade);
    }

    if (Object.keys(this.students).includes(String(grade))) {
      const newGradeList = [...this.students[grade], name];
      this.students = {
        ...this.students,
        [grade]: newGradeList.sort(),
      };
      return;
    }
    this.students = {
      ...this.students,
      [grade]: [name],
    };
  }

  public grade(grade: number) {
    const gradeList = this.students[grade];
    return gradeList ? [...gradeList] : [];
  }
}
