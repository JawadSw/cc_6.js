class Employee {
  constructor(name, department, level = "Associate") {
    this.name = name;
    this.department = department;
    this.level = level;
  }

  describe() {
    return `${this.name} is a ${this.level} in ${this.department}`;
  }

  promote() {
    if (this.level === "Associate") {
      this.level = "Manager";
    } else if (this.level === "Manager") {
      this.level = "Director";
    } else {
      this.level = "Executive";
    }
  }
}

//step 3
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department, "Manager");
    this.teamSize = teamSize;
  }

  
  describe() {
    return `${this.name} manages ${this.teamSize} people in ${this.department}`;
  }
}



