const clickNaufal = document.querySelector('.btn-naufal')
const clickNaufal2 = document.querySelector('.btn-naufal-2')
const clickNaufal4 = document.querySelector('.btn-naufal-4')

clickNaufal.addEventListener('click', () => {
    Swal.fire({
        title: 'Ingin Menjadi Nauval?',
        text: 'Siapa Nauval itu?',
        input: 'text',
        showCancelButton: true
    })
        .then((value) => {
            if (value.isConfirmed) {
                if (value.value === 'orang terganteng') {
                    return Swal.fire({
                        title: 'Benar',
                        icon: 'success'
                    })
                }
                return Swal.fire({
                    title: 'Kamu bukan nauval',
                    icon: 'error'
                })
            } else {
                Swal.fire('Yah Kamu Belum Menjawab')
            }

        })
})
clickNaufal2.addEventListener('click', () => {
    Swal.fire({
        title: 'Ingin Menjadi Menajdi Abdul?',
        text: 'Siapa Abdul itu?',
        input: 'text',
        showCancelButton: true
    })
        .then((value) => {
            if (value.isConfirmed) {
                if (value.value === 'orang terkeren') {
                    return Swal.fire({
                        title: 'Benar',
                        icon: 'success'
                    })
                }
                return Swal.fire({
                    title: 'Kamu Bukan Abdul',
                    icon: 'error'
                })
            } else {
                Swal.fire('Yah Kamu Belum Menjawab')
            }

        })
})
clickNaufal4.addEventListener('click', () => {
    Swal.fire({
        title: 'Ingin Menjadi Billy?',
        text: 'Siapa Billy itu?',
        input: 'text',
        showCancelButton: true
    })
        .then((value) => {
            if (value.isConfirmed) {
                if (value.value === 'orang terkece') {
                    return Swal.fire({
                        title: 'Benar',
                        icon: 'success'
                    })
                }
                return Swal.fire({
                    title: 'Kamu Bukan Billy',
                    icon: 'error'
                })
            } else {
                Swal.fire('Yah Kamu Belum Menjawab')
            }

        })
})
