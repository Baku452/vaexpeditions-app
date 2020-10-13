const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;

const years = [
  {
    id: 1,
    name: currentYear,
    months: [
      { id: 'January', name: `January ${currentYear}`, checked: false, disabled: false },
      {
        id: 'February',
        name: `February ${currentYear}`,
        checked: false,
        disabled: false,
      },
      { id: 'March', name: `March ${currentYear}`, checked: false, disabled: false },
      { id: 'April', name: `April ${currentYear}`, checked: false, disabled: false },
      { id: 'May', name: `May ${currentYear}`, checked: false, disabled: false },
      { id: 'June', name: `June ${currentYear}`, checked: false, disabled: false },
      { id: 'July', name: `July ${currentYear}`, checked: false, disabled: false },
      { id: 'August', name: `August ${currentYear}`, checked: false, disabled: false },
      {
        id: 'September',
        name: `September ${currentYear}`,
        checked: false,
        disabled: false,
      },
      { id: 'October', name: `October ${currentYear}`, checked: false, disabled: false },
      {
        id: 'November',
        name: `November ${currentYear}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'December',
        name: `December ${currentYear}`,
        checked: false,
        disabled: false,
      },
    ],
  },
  {
    id: 2,
    name: currentYear + 1,
    months: [
      {
        id: 'January',
        name: `January ${currentYear + 1}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'February',
        name: `February ${currentYear + 1}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'March',
        name: `March ${currentYear + 1}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'April',
        name: `April ${currentYear + 1}`,
        checked: false,
        disabled: false,
      },
      { id: 'May', name: `May ${currentYear + 1}`, checked: false, disabled: false },
      { id: 'June', name: `June ${currentYear + 1}`, checked: false, disabled: false },
      { id: 'July', name: `July ${currentYear + 1}`, checked: false, disabled: false },
      {
        id: 'August',
        name: `August ${currentYear + 1}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'September',
        name: `September ${currentYear + 1}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'October',
        name: `October ${currentYear + 1}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'November',
        name: `November ${currentYear + 1}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'December',
        name: `December ${currentYear + 1}`,
        checked: false,
        disabled: false,
      },
    ],
  },
  {
    id: 3,
    name: currentYear + 2,
    months: [
      {
        id: 'January',
        name: `January ${currentYear + 2}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'February',
        name: `February ${currentYear + 2}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'March',
        name: `March ${currentYear + 2}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'April',
        name: `April ${currentYear + 2}`,
        checked: false,
        disabled: false,
      },
      { id: 'May', name: `May ${currentYear + 2}`, checked: false, disabled: false },
      {
        id: 'June',
        name: `June ${currentYear + 2}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'July',
        name: `July ${currentYear + 2}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'August',
        name: `August ${currentYear + 2}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'September',
        name: `September ${currentYear + 2}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'October',
        name: `October ${currentYear + 2}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'November',
        name: `November ${currentYear + 2}`,
        checked: false,
        disabled: false,
      },
      {
        id: 'December',
        name: `December ${currentYear + 2}`,
        checked: false,
        disabled: false,
      },
    ],
  },
];

function removeElement(array, elem) {
  const index = array.findIndex(item => item.name === elem);

  if (index > -1) {
    array.splice(index, 1);
  }
}

years.forEach((year, index) => {
  if (year.name === currentYear) {
    year.months.forEach((month, indexMonth) => {
      if (indexMonth < currentMonth) {
        years[index].months[indexMonth].disabled = true;
      }
    });
  }
});

years.forEach(year => {
  const yearCount = year.months.filter(item => item.disabled === true);
  if (yearCount.length === 12) {
    removeElement(years, year?.name);
  }
});

export { years, currentMonth, currentYear, removeElement };
