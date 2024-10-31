export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-EN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour12: false,
    });
    const formattedDate = formatter.format(date);
    return formattedDate;
};
