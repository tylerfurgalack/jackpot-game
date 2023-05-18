import './LettersNumbers.css';

const LettersNumbers = ({ dice1, dice2, sum }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="empty-boxes-container">
      {numbers.map((num) => {
        const isHighlighted = num === dice1 || num === dice2 || num === sum;
        return (
          <div
            key={num}
            className={`empty-box ${isHighlighted ? 'highlighted-box' : ''}`}
          >
            {num}
          </div>
        );
      })}
    </div>
  );
};

export default LettersNumbers;
