class Person {
  constructor(data) {
    this.name = data.name || 'Name Fullname';
    this.position = data.position || 'Worker';
    this.contacts = data.contacts || 'Missing'
    this.about = data.about || 'Missing';
    this.education = data.education || 'Missing';
    this.experience = data.experience || 'Missing';
    this.skills = data.skills || 'None';
    this.competence = data.competence || 'None';
    this.hobby = data.hobby || 'None';
  }
}

export default Person;
