
export const convertTwilioPhoneToSupabase = (phone) => {
    return phone.replace("whatsapp:+", "");
}

export const convertSupabasePhoneToTwilio = (phone) => {
    return "whatsapp:+" + phone;
}