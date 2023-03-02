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
  students: {};
  constructor() {
    this.students = {};
  }

  roster() {
    return this.students;
  }

  add(name: string, grade: number) {
    const existingNames = Object.values(this.students).flat();
    if (existingNames.includes(name)) {
      //TODO: take the name out from the prev grade before adding it to the new grade using the logic below
    }

    if (Object.keys(this.students).includes(grade + "")) {
      const newGradeList = [
        ...this.students[grade as keyof typeof this.students],
        name,
      ];
      this.students = { ...this.students, [grade]: newGradeList.sort() };
      return;
    }
    this.students = { ...this.students, [grade]: [name] };
  }

  grade(grade: number) {
    const gradeList = this?.students[grade as keyof typeof this.students];
    return gradeList ? gradeList : [];
  }
}
