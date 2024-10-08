export const dateFormatter = (dateString: string, displayTime: boolean) => {
    const date = new Date(dateString);
    const datePart = date.toLocaleDateString('sv-SE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const timePart = date.toLocaleTimeString('sv-SE', {
      hour: '2-digit',
      minute: '2-digit',
    });

    if (displayTime) {
      return `${datePart} klockan ${timePart}`;
    } else return datePart;
  };