var app = new Vue ({
    el: '#app',
    data: {
        title: 'Notatnik',
        note: {
            title: '',
            text: ''
        },
        notes: [
        ]
    },
methods: {
    addNote() {
        let {text, title} = this.note
        this.notes.push({
            text,
            title,
            date: new Date(Date.now()).toLocaleString()
        })
    },
    removeNote(index){
        this.notes.splice(index, 1);
    }
}
}) 