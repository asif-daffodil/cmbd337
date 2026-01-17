function myInfo () {
    this.fname = "Asif";
    this.lname = "Abir";
    this.fullName = () => {
        return `${this.fname} ${this.lname}`;
    }
}
