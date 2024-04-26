const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['25 march', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}
// console.log(college.unique.color);
college.unique.result.merit='top top top'
console.log(college.unique.result.merit);
college.events[1]='16 dec'
console.log(college.events[1]);

delete college.class
console.log(college);