import Part from './Part';

const Content = ({ parts }) => {
  // Calculamos el total de ejercicios con reduce
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}

      {/* Mostramos la suma al final */}
      <p>
        <strong>Total of exercises: {totalExercises}</strong>
      </p>
    </div>
  );
};

export default Content;


