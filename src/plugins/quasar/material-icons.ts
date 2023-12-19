import type { QuasarIconSet } from 'quasar';

const matAccessTime = 'M0 0h24v24H0z@@fill:none;&&M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z&&M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z';
const matAdd = 'M0 0h24v24H0z@@fill:none;&&M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z';
const matAddBox = 'M0 0h24v24H0z@@fill:none;&&M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z';
const matArrowBack = 'M0 0h24v24H0z@@fill:none;&&M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z';
const matArrowDownward = 'M0 0h24v24H0V0z@@fill:none;&&M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z';
const matArrowDropDown = 'M0 0h24v24H0z@@fill:none;&&M7 10l5 5 5-5z';
const matArrowForward = 'M0 0h24v24H0z@@fill:none;&&M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z';
const matArrowUpward = 'M0 0h24v24H0V0z@@fill:none;&&M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z';
const matCancel = 'M0 0h24v24H0z@@fill:none;&&M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z';
const matCheck = 'M0 0h24v24H0z@@fill:none;&&M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z';
const matCheckCircle = 'M0 0h24v24H0z@@fill:none;&&M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z';
const matChevronLeft = 'M0 0h24v24H0z@@fill:none;&&M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z';
const matChevronRight = 'M0 0h24v24H0z@@fill:none;&&M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z';
const matClear = 'M0 0h24v24H0z@@fill:none;&&M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';
const matClearAll = 'M0 0h24v24H0z@@fill:none;&&M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z';
const matClose = 'M0 0h24v24H0z@@fill:none;&&M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';
const matCloudUpload = 'M0 0h24v24H0z@@fill:none;&&M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z';
const matCode = 'M0 0h24v24H0V0z@@fill:none;&&M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z';
const matDone = 'M0 0h24v24H0z@@fill:none;&&M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z';
const matDoneAll = 'M0 0h24v24H0z@@fill:none;&&M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z';
const matEdit = 'M0 0h24v24H0z@@fill:none;&&M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z';
const matError = 'M0 0h24v24H0z@@fill:none;&&M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z';
const matFirstPage = 'M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z&&M24 24H0V0h24v24z@@fill:none;';
const matFontDownload = 'M0 0h24v24H0V0z@@fill:none;&&M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z';
const matFormatAlignCenter = 'M0 0h24v24H0z@@fill:none;&&M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z';
const matFormatAlignJustify = 'M0 0h24v24H0z@@fill:none;&&M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z';
const matFormatAlignLeft = 'M0 0h24v24H0z@@fill:none;&&M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z';
const matFormatAlignRight = 'M0 0h24v24H0z@@fill:none;&&M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z';
const matFormatBold = 'M0 0h24v24H0z@@fill:none;&&M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z';
const matFormatClear = 'M0 0h24v24H0z@@fill:none;&&M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z';
const matFormatIndentDecrease = 'M0 0h24v24H0z@@fill:none;&&M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z';
const matFormatIndentIncrease = 'M0 0h24v24H0z@@fill:none;&&M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z';
const matFormatItalic = 'M0 0h24v24H0z@@fill:none;&&M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z';
const matFormatListBulleted = 'M0 0h24v24H0V0z@@fill:none;&&M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z';
const matFormatListNumbered = 'M0 0h24v24H0z@@fill:none;&&M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z';
const matFormatQuote = 'M0 0h24v24H0z@@fill:none;&&M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z';
const matFormatSize = 'M0 0h24v24H0z@@fill:none;&&M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z';
const matFormatUnderlined = 'M0 0h24v24H0z@@fill:none;&&M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z';
const matFullscreen = 'M0 0h24v24H0z@@fill:none;&&M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z';
const matGrade = 'M0 0h24v24H0z@@fill:none;&&M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';
const matGradient = 'M0 0h24v24H0z@@fill:none;&&M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z';
const matInfo = 'M0 0h24v24H0z@@fill:none;&&M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z';
const matKeyboardArrowDown = 'M0 0h24v24H0V0z@@fill:none;&&M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z';
const matKeyboardArrowLeft = 'M0 0h24v24H0V0z@@fill:none;&&M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z';
const matKeyboardArrowRight = 'M0 0h24v24H0V0z@@fill:none;&&M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z';
const matKeyboardArrowUp = 'M0 0h24v24H0z@@fill:none;&&M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z';
const matLastPage = 'M0 0h24v24H0V0z@@fill:none;&&M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z';
const matLens = 'M0 0h24v24H0z@@fill:none;&&M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z';
const matLink = 'M0 0h24v24H0z@@fill:none;&&M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z';
const matPlayArrow = 'M0 0h24v24H0z@@fill:none;&&M8 5v14l11-7z';
const matPrint = 'M0 0h24v24H0z@@fill:none;&&M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z';
const matPriorityHigh = 'M0 0h24v24H0z@@fill:none;&&M12 19 m-2, 0 a2,2 0 1,0 4,0 a2,2 0 1,0 -4,0&&M10 3h4v12h-4z';
const matRedo = 'M0 0h24v24H0z@@fill:none;&&M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z';
const matRefresh = 'M0 0h24v24H0z@@fill:none;&&M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z';
const matRemove = 'M0 0h24v24H0z@@fill:none;&&M19 13H5v-2h14v2z';
const matStrikethroughS = 'M0 0 H24 V24 H0 V0 z@@fill:none;&&M6.85,7.08C6.85,4.37,9.45,3,12.24,3c1.64,0,3,0.49,3.9,1.28c0.77,0.65,1.46,1.73,1.46,3.24h-3.01 c0-0.31-0.05-0.59-0.15-0.85c-0.29-0.86-1.2-1.28-2.25-1.28c-1.86,0-2.34,1.02-2.34,1.7c0,0.48,0.25,0.88,0.74,1.21 C10.97,8.55,11.36,8.78,12,9H7.39C7.18,8.66,6.85,8.11,6.85,7.08z M21,12v-2H3v2h9.62c1.15,0.45,1.96,0.75,1.96,1.97 c0,1-0.81,1.67-2.28,1.67c-1.54,0-2.93-0.54-2.93-2.51H6.4c0,0.55,0.08,1.13,0.24,1.58c0.81,2.29,3.29,3.3,5.67,3.3 c2.27,0,5.3-0.89,5.3-4.05c0-0.3-0.01-1.16-0.48-1.94H21V12z';
const matStyle = 'M0 0h24v24H0z@@fill:none;&&M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z';
const matTextFormat = 'M0 0h24v24H0z@@fill:none;&&M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z';
const matToday = 'M0 0h24v24H0z@@fill:none;&&M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z';
const matTune = 'M0 0h24v24H0z@@fill:none;&&M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z';
const matUndo = 'M0 0h24v24H0z@@fill:none;&&M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z';
const matVerticalAlignBottom = 'M0 0h24v24H0z@@fill:none;&&M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z';
const matVerticalAlignTop = 'M0 0h24v24H0z@@fill:none;&&M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z';
const matWarning = 'M0 0h24v24H0z@@fill:none;&&M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z';

export default {
  name: 'svg-material-icons',
  type: {
    positive: matCheckCircle,
    negative: matWarning,
    info: matInfo,
    warning: matPriorityHigh
  },
  arrow: {
    up: matArrowUpward,
    right: matArrowForward,
    down: matArrowDownward,
    left: matArrowBack,
    dropdown: matArrowDropDown
  },
  chevron: {
    left: matChevronLeft,
    right: matChevronRight
  },
  colorPicker: {
    spectrum: matGradient,
    tune: matTune,
    palette: matStyle
  },
  pullToRefresh: {
    icon: matRefresh
  },
  carousel: {
    left: matChevronLeft,
    right: matChevronRight,
    up: matKeyboardArrowUp,
    down: matKeyboardArrowDown,
    navigationIcon: matLens
  },
  chip: {
    remove: matCancel,
    selected: matCheck
  },
  datetime: {
    arrowLeft: matChevronLeft,
    arrowRight: matChevronRight,
    now: matAccessTime,
    today: matToday
  },
  editor: {
    bold: matFormatBold,
    italic: matFormatItalic,
    strikethrough: matStrikethroughS,
    underline: matFormatUnderlined,
    unorderedList: matFormatListBulleted,
    orderedList: matFormatListNumbered,
    subscript: matVerticalAlignBottom,
    superscript: matVerticalAlignTop,
    hyperlink: matLink,
    toggleFullscreen: matFullscreen,
    quote: matFormatQuote,
    left: matFormatAlignLeft,
    center: matFormatAlignCenter,
    right: matFormatAlignRight,
    justify: matFormatAlignJustify,
    print: matPrint,
    outdent: matFormatIndentDecrease,
    indent: matFormatIndentIncrease,
    removeFormat: matFormatClear,
    formatting: matTextFormat,
    fontSize: matFormatSize,
    align: matFormatAlignLeft,
    hr: matRemove,
    undo: matUndo,
    redo: matRedo,
    heading: matFormatSize,
    code: matCode,
    size: matFormatSize,
    font: matFontDownload,
    viewSource: matCode
  },
  expansionItem: {
    icon: matKeyboardArrowDown,
    denseIcon: matArrowDropDown
  },
  fab: {
    icon: matAdd,
    activeIcon: matClose
  },
  field: {
    clear: matCancel,
    error: matError
  },
  pagination: {
    first: matFirstPage,
    prev: matKeyboardArrowLeft,
    next: matKeyboardArrowRight,
    last: matLastPage
  },
  rating: {
    icon: matGrade
  },
  stepper: {
    done: matCheck,
    active: matEdit,
    error: matWarning
  },
  tabs: {
    left: matChevronLeft,
    right: matChevronRight,
    up: matKeyboardArrowUp,
    down: matKeyboardArrowDown
  },
  table: {
    arrowUp: matArrowUpward,
    warning: matWarning,
    firstPage: matFirstPage,
    prevPage: matChevronLeft,
    nextPage: matChevronRight,
    lastPage: matLastPage
  },
  tree: {
    icon: matPlayArrow
  },
  uploader: {
    done: matDone,
    clear: matClear,
    add: matAddBox,
    upload: matCloudUpload,
    removeQueue: matClearAll,
    removeUploaded: matDoneAll
  }
} as QuasarIconSet;
