class Person {
  constructor(data) {
    this.name = data.name || 'Name Fullname';
    this.position = data.position || 'Worker';
    this.address = data.address || 'Earth';
    this.phone = data.phone || '0123456790';
    this.email = data.email || 'mail@mail.com';
    this.website = data.website || 'website.com';
    this.about = data.about || 'Missing';
    this.experience = data.experience || 'Missing';
    this.education = this.education || 'None';
    this.skills = data.skills || 'None';
    this.hobby = data.hobby || 'None';
  }
}

export default Person;
