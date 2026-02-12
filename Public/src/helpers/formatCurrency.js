const currencyFormatter = (value) => {
    return Number(value).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})
}

export default currencyFormatter