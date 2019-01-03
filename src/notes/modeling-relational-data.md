---
path: '/notes/modeling-relational-data'
date: '2018-12-16'
title: 'Modeling (and querying) relational data with JavaScript'
draft: false
---

This post describes a way of modeling relational data in JavaScript and shows how the `filter()` and `some()` array methods can be used to query this data. It's not intended to replace a real database, but to show how an array of objects can be filtered based on the contents of another array of objects.

## Structuring the data

For this example, let's consider teachers and students. Each person can be represented by simple object with their person's name and a unique ID. The ID allows us to refer to a specific teacher or student, even if their name were to change in the future. Since we'll have multiple teachers and students, let's organize them in arrays:

```javascript
const teachers = [
  {
    id: 1,
    name: 'John Kreuger',
  },
  {
    id: 2,
    name: 'Amy David',
  },
];

const students = [
  {
    id: 1,
    name: 'Alice Thompson',
  },
  {
    id: 2,
    name: 'Bill Lemond',
  },
  {
    id: 3,
    name: 'Ashley Jefferson',
  },
];
```

Teachers have multiple students and students have multiple teachers. This is a many-to-many relationship, and there are several ways to model this data. One method is to create a _list of the connections between teachers and students_. This can be referred to as an [associative entity](https://en.wikipedia.org/wiki/Associative_entity) if you want to appear smart and forgot your glasses at home.

Let's create a third array to describe these connections. Note that we're using the unique IDs of each teacher and student, future proofing us against name changes and allowing people to share the same name.

```javascript
const teachersToStudents = [
  {
    teacherId: 1,
    studentId: 1,
  },
  {
    teacherId: 1,
    studentId: 2,
  },
  {
    teacherId: 1,
    studentId: 3,
  },
  {
    teacherId: 2,
    studentId: 2,
  },
  {
    teacherId: 2,
    studentId: 3,
  },
];
```

## Filtering the data

Okay, we now have three arrays describing teachers, students, and the connections between them. 🎉

Let's put this to use. Our fictional application could have a profile page for each teacher with a list of their students. We're going to need a function that will take a teacher (referenced by their ID) and return an array of the students who have that teacher.

```javascript
// Returns an array of students for a given teacher.
function getStudentsForTeacher(teacherId) {
  // @todo: Return array.
}
```

What we want to return here is a subset of the `students` array. Lucky for us, this is exactly what the [filter() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) does. It goes through the elements in an array one by one, passing each element to a function we provide. If our function returns `true`, the element will be added to a new array.

For example, if our function always returns `true` we would get an array containing every student.

```javascript
// Returns an array of students for a given teacher.
function getStudentsForTeacher(teacherId) {
  students.filter(student => true);
}
```

So what we need is a function that will return `true` if the student is connected to the teacher and `false` otherwise. To keep it clear let's create a second function for this:

```javascript
// Returns true or false, indicating whether a given teacher has a given student.
function teacherHasStudent(teacherId, studentId) {
  // @todo: Return true or false.
}
```

How do we answer this question? That's right, by referring to our `teachersToStudents` array that describes all of the connections between teachers and students.

We could create a loop to iterate through the array, returning `true` if we find a match and `false` if we reach the end. Not terrible, but there's a better way. Similar to filtering, the [some() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) will iterate over the elements in an array. But instead of creating a new array, it will run each element against a test function we provide and return `true` if at least one element passes our test.

```javascript
// Returns true or false, indicating whether a given teacher has a given student.
function teacherHasStudent(teacherId, studentId) {
  return teachersToStudents.some(/* @todo: Test function that returns true if we find a match. */);
}
```

So all that's missing is a function that will tell us if the `teachersToStudents` array contains an object with the teacher and student we're looking for. Here's an arrow function that compares IDs to do just that.

```javascript
// Returns true if this item matches, and false otherwise.
teacherToStudent =>
  teacherToStudent.teacherId === teacherId &&
  teacherToStudent.studentId === studentId;
```

By passing that function to `some()`, we now have a working function that tells us whether a given teacher has a given student!

```javascript
// Returns true or false, indicating whether a teacher has a given student.
function teacherHasStudent(teacherId, studentId) {
  return teachersToStudents.some(
    teacherToStudent =>
      teacherToStudent.teacherId === teacherId &&
      teacherToStudent.studentId === studentId
  );
}
```

We can update `getStudentsForTeacher()` to use this, so that it will go through `students` and create a new array of only those students who are associated with the specified teacher.

```javascript
// Returns an array of students for a given teacher.
function getStudentsForTeacher(teacherId) {
  return students.filter(student => teacherHasStudent(teacherId, student.id));
}

// Test it out!
console.log(getStudentsForTeacher(1)); // Returns 3 students.
console.log(getStudentsForTeacher(2)); // Returns 2 students.
```

Success! We've taken two arrays, described relationships between their elements using a third array, and then queried our data to get what needs to be shown on the teacher's profile page. Take a look at the [CodePen demo](https://codepen.io/mikewheaton/pen/Nerxqd?editors=0012) to see how this all fits together.

While this exact use case would be better handled by querying on the server-side (especially if you're dealing with thousands of records or sensitive data), these array methods are useful for other problems you're likely to encounter.

## Exercises and further reading

Want to get more practice with this or learn more? I'd suggest you:

- Write a function that returns the teachers for a given student.
- Read up on [schemas](http://learnmongodbthehardway.com/schema/schemabasics/) and find alternate ways of structuring this data.
- Iterate through the teachers and display a list of students for each teacher in the browser.
- Add an array of courses, connecting these to both teachers and students. Watch out for redundant data.
- Try out other common array methods like [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) and [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
