import Part from './Part';

const Content = ({ parts }) => {
  // Usamos reduce para sumar todos los ejercicios
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      {/* Mostramos cada parte */}
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


