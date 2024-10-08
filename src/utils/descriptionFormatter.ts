export const descriptionFormatter = (initialText:string) => {
    const breaks = initialText.split('\n').join('<br>');
    const listings = breaks.split('•').join('<br>•');
    return listings;
  };