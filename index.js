// Write your solution in this file!
const employee = {
    name:"Nick",
    streetAddress:"5805 Potomac",
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj}
    newObj[key] = value
    return (employee, newObj)
}
employee = updateEmployeeWithKeyAndValue(
    newObj,
    "Sam",
    "11 Broadway",
)
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}
employee = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "Sam",
    "12 Broadway"
)
function deleteFromEmployeeByKey() {
    let newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name
    return employee
}