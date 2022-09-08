class Document {
  constructor(title) {
    this.title = title;
    this.signature = null;
  }
  sign(signature) {
    this.signature = signature;
  }
}

class DocumentComposite {
  constructor(title) {
    this.items = [];
    if (title) {
      this.items.push(new Document(title));
    }
  }

  add(item) {
    this.items.push(item);
  }

  sign(signature) {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].sign(signature);
    }
  }
}

const forms = new DocumentComposite();
const pr2Form = new Document(
  'Primary Treating Physicians Progress Report (PR2)'
);
const w2Form = new Document('Internal Revenue Service Tax Form (W2)');
forms.add(pr2Form);
forms.add(w2Form);

forms.sign('Bobby Lopez');

console.log(forms);
