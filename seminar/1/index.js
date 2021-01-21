const typingEffect = (target) => {
  let placeholder = document.createElement('span');
  placeholder.className = 'typing-effect-placeholder';
  placeholder.textContent = '한';
  let text = document.createElement('span');
  const cursor = document.createElement('span');
  cursor.className = 'typing-effect-cursor';

  target.append(text);
  text.append(placeholder, document.createTextNode(''), cursor);

  let seq = [
    'ㅎ',
    '하',
    '한',
    '한ㄱ',
    '한구',
    '한국',
    '한국 ',
    '한국 ㅎ',
    '한국 하',
    '한국 하ㅅ',
    '한국 하스',
    '한국 하스ㅋ',
    '한국 하스케',
    '한국 하스켈',
    '한국 하스켈 ',
    '한국 하스켈 ㅎ',
    '한국 하스켈 하',
    '한국 하스켈 학',
    '한국 하스켈 학ㄱ',
    '한국 하스켈 학교',
  ].reverse();
  let stage = 0;

  const registerApplySeq = (i) => {
    window.setTimeout(applySeq, 150, i);
  };

  const applySeq = (i) => {
    if (text.contains(placeholder)) {
      text.removeChild(placeholder);
    }
    text.childNodes[i].textContent = seq.pop();
    if (seq.length > 0) {
      registerApplySeq(i);
    } else {
      switch (stage) {
      case 0:
        registerStage1();
        break;
      case 1:
        registerStage2();
        break;
      case 2:
        registerStage3();
        break;
      case 3:
        registerStage4();
        break;
      case 5:
        target.className += ' done';
      default:
        break;
      }
    }
  };

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('width', '0');
  svg.setAttribute('height', '80');
  svg.setAttribute('viewBox', '0 0 0 80');
  const svgPaths = [
    [document.createElementNS('http://www.w3.org/2000/svg', 'path'), '110'],
    [document.createElementNS('http://www.w3.org/2000/svg', 'path'), '100'],
    [document.createElementNS('http://www.w3.org/2000/svg', 'path'), '50'],
  ];
  svgPaths[2][0].setAttribute('d', 'M1.842 77.722L26.586 40.63 1.842 3.537H20.4L45.144 40.63 20.4 77.722H1.842zm0 0');
  svgPaths[2][0].setAttribute('fill', '#453a62');
  svgPaths[1][0].setAttribute('d', 'M26.586 77.722L51.33 40.63 26.586 3.537h18.558L94.63 77.722H76.074L60.61 54.54 45.143 77.722H26.586zm0 0');
  svgPaths[1][0].setAttribute('fill', '#5e5086');
  svgPaths[0][0].setAttribute('d', 'M86.384 56.085L78.136 43.72h28.868v12.366h-20.62zM74.012 37.54l-8.248-12.365h41.24V37.54H74.012zm0 0');
  svgPaths[0][0].setAttribute('fill', '#8f4e8b');

  const registerApplySvgPaths = () => {
    window.setTimeout(applySvgPaths, 500);
  };

  const applySvgPaths = () => {
    if (text.contains(placeholder)) {
      text.removeChild(placeholder);
    }
    const svgPath = svgPaths.pop();
    svg.setAttribute('width', svgPath[1]);
    svg.setAttribute('viewBox', '0 0 ' + svgPath[1] + ' 80');
    svg.append(svgPath[0]);

    if (svgPaths.length > 0) {
      registerApplySvgPaths();
    } else {
      registerStage5();
    }
  };

  const registerStage0 = () => {
    registerApplySeq(0);
  };

  const registerStage1 = () => {
    window.setTimeout(() => {
      stage = 1;
      text.removeChild(cursor);
      text = document.createElement('span');
      target.append(text);
      text.append(placeholder, document.createTextNode(''), cursor);
      seq = [
        'ㅈ',
        '제',
        '제',
        '제1 ',
        '제1 ㅎ',
        '제1 호',
        '제1 회',
        '제1 회 ',
        '제1 회 ㅎ',
        '제1 회 하',
        '제1 회 함',
        '제1 회 함ㅅ',
        '제1 회 함수',
        '제1 회 함수ㅎ',
        '제1 회 함수혀',
        '제1 회 함수형',
        '제1 회 함수형 ',
        '제1 회 함수형 ㄱ',
        '제1 회 함수형 개',
        '제1 회 함수형 개ㅂ',
        '제1 회 함수형 개바',
        '제1 회 함수형 개발',
        '제1 회 함수형 개발 ',
        '제1 회 함수형 개발 ㅅ',
        '제1 회 함수형 개발 세',
        '제1 회 함수형 개발 세ㅁ',
        '제1 회 함수형 개발 세미ㄴ',
        '제1 회 함수형 개발 세미나',
      ].reverse();
      registerApplySeq(0);
    }, 1000);
  };

  const registerStage2 = () => {
    window.setTimeout(() => {
      stage = 2;
      text.removeChild(cursor);
      text = document.createElement('span');
      target.append(text);
      text.append(placeholder, document.createTextNode(''), cursor);
      seq = [
        '>',
        '>λ',
        '>λ=',
      ].reverse();
      registerApplySeq(0);
    }, 500);
  };

  const registerStage3 = () => {
    window.setTimeout(() => {
      placeholder.textContent = '>';
      stage = 3;
      seq = [
        '>λ',
        '>',
        '',
      ].reverse();
      registerApplySeq(0);
    }, 500);
  };

  const registerStage4 = () => {
    text.removeChild(text.childNodes[0]);
    text.prepend(placeholder);
    window.setTimeout(() => {
      stage = 4;
      text.insertBefore(svg, cursor);
      registerApplySvgPaths();
    }, 500);
  };

  const registerStage5 = () => {
    window.setTimeout(() => {
      stage = 5;
      text.insertBefore(document.createTextNode(''), cursor);
      text.className = 'typing-title-subscript';
      seq = [
        'K',
        'KR',
      ].reverse();
      registerApplySeq(1);
    }, 300);
  };

  registerStage0();
};

document.addEventListener('DOMContentLoaded', () => {
  const typingTitle = document.getElementById('typing-title');

  typingEffect(typingTitle);
});
