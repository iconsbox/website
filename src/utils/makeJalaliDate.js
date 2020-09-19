import * as jalaali from 'jalaali-js';

export const changeToJalali = (date) => {
  const dateSplatted = date.split(' ');
  const jalaliDateArray = jalaali.toJalaali(
    parseInt(dateSplatted[0]),
    parseInt(dateSplatted[1]),
    parseInt(dateSplatted[2]),
  );

  return `${jalaliDateArray.jy}/${jalaliDateArray.jm}/${jalaliDateArray.jd}`;
};
