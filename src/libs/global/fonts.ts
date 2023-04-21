import { IBM_Plex_Sans } from 'next/font/google';
import { css } from 'styled-components';
/**
 * FONT OPTIMIZE
 * weight: font 의 굵기
 * display : font-display at css
 * subsets : font가 적용하는 언어 중 먼저 가져올 나라의 언어 key
 * style : font-style
 * variable : css 변수 방식으로 사용할 때의 이름을 정의 key
 * fallback : 해당 font 를 가져오지 못했을 때의 대체 글꼴
 */

export const IBM_ITALIC_B = IBM_Plex_Sans({
  weight: '700',
  display: 'fallback', // fallback?
  style: 'italic',
  // variable: '--ibm',
  subsets: ['cyrillic-ext', 'cyrillic', 'greek'],
  // preload: false,
});

export const IBM_ITALIC_M = IBM_Plex_Sans({
  weight: '500',
  display: 'fallback', // fallback?
  style: 'italic',
  subsets: ['cyrillic-ext', 'cyrillic', 'greek'],
  variable: '--ibm',
});

export const IBM_ITALIC_T = IBM_Plex_Sans({
  weight: '300',
  display: 'fallback', // fallback?
  style: 'italic',
  subsets: ['cyrillic-ext', 'cyrillic', 'greek'],
  variable: '--ibm',
});

export const IBM_NORMAL_B = IBM_Plex_Sans({
  weight: '700',
  display: 'fallback', // fallback?
  style: 'normal',
  subsets: ['cyrillic-ext', 'cyrillic', 'greek'],
  variable: '--ibm',
});

type FontType = 'logo' | 'sublogo' | 'title' | 'subtitle' | 'normal';

export const utilFonts = (types: FontType) => {
  const source = new Map([
    [
      'logo',
      css`
        font-family: ${IBM_ITALIC_B.style.fontFamily};
        font-size: '36px';
      `,
    ],
    [
      'sublogo',
      css`
        font-family: ${IBM_ITALIC_B.style.fontFamily};
        font-size: '28px';
      `,
    ],
    [
      'title',
      css`
        font-family: ${IBM_ITALIC_B.style.fontFamily};
        font-size: '32px';
      `,
    ],
    [
      'subtitle',
      css`
        font-family: ${IBM_ITALIC_B.style.fontFamily};
        font-size: '18px';
      `,
    ],
    [
      'normal',
      css`
        font-family: ${IBM_NORMAL_B.style.fontFamily};
        font-size: '12px';
      `,
    ],
  ]);

  return source.get(types);
};
