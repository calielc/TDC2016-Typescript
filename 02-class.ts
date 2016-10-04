interface Person {
    firstName: string;
    lastName: string;
}

function greeterr(person: Person) {
    return "Hello, I'm " + person.firstName + " " + person.lastName;
}

class Developer implements Person {
    public languages: Array<string>;

    get fullName(): string  {
        return `${this.firstName} ${this.lastName}`;
    }

    constructor(public firstName: string, public lastName: string, languages: string[]) {
        this.languages = languages;
    }

    sayMyName(): string {
        return `I'm ${this.fullName}`;
    }

    //estatico?
    private languageExists(language: string): boolean {
        for (let old of this.languages) {
            if (language === old) {
                return true;
            }
        }
        return false;
    }

    public addLanguage(language: string): void {
        let exists = this.languageExists(language);
        if (!exists) {
            this.languages.push(language);
        }
    }
}

let developer = new Developer("Caliel", "Costa", ["C#", "javascript"]);
console.log(greeterr(developer));

console.log(developer.sayMyName());

console.log("languages: " + developer.languages.join(", "));
developer.addLanguage("html");
developer.addLanguage("html");
console.log("languages: " + developer.languages.join(", "));
