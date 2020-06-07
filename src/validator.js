// validasi hanya boleh emai dari @google.com
export function notGmail(value = "") {
    let regex = new RegExp(/^[a-z0-9](\.?[a-z0-9]){5,}@gmail\.com$/);
    return regex.test(value)
}

// validasi nomor telepon
export function notPhone(value = "") {
    let regex = new RegExp(/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/);
    return regex.test(value)
}