let main = {

    variables: {
      turn: 'w',
      selectedpiece: '',
      highlighted: [],
      pieces: {
        w_king: {
          position: '5_1',
          img: '&#9812;',
          captured: false,
          moved: false,
          type: 'w_king'
          
        },
        w_queen: {
          position: '4_1',
          img: '&#9813;',
          captured: false,
          moved: false,
          type: 'w_queen'
        },
        w_bishop1: {
          position: '3_1',
          img: '&#9815;',
          captured: false,
          moved: false,
          type: 'w_bishop'
        },
        w_bishop2: {
          position: '6_1',
          img: '&#9815;',
          captured: false,
          moved: false,
          type: 'w_bishop'
        },
        w_knight1: {
          position: '2_1',
          img: '&#9816;',
          captured: false,
          moved: false,
          type: 'w_knight'
        },
        w_knight2: {
          position: '7_1',
          img: '&#9816;',
          captured: false,
          moved: false,
          type: 'w_knight'
        },
 w_rook1: {
          position: '1_1',
          img: '&#9814;',
          captured: false,
          moved: false,
          type: 'w_rook'
        },
        w_rook2: {
          position: '8_1',
          img: '&#9814;',
          captured: false,
          moved: false,
          type: 'w_rook'
        },
        w_pawn1: {
          position: '1_2',
          img: '&#9817;',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn2: {
          position: '2_2',
          img: '&#9817;',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn3: {
          position: '3_2',
 img: '&#9817;',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn4: {
          position: '4_2',
          img: '&#9817;',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn5: {
          position: '5_2',
          img: '&#9817;',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn6: {
          position: '6_2',
          img: '&#9817;',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn7: {
          position: '7_2',
          img: '&#9817;',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
        w_pawn8: {
          position: '8_2',
          img: '&#9817;',
          captured: false,
          type: 'w_pawn',
          moved: false
        },
