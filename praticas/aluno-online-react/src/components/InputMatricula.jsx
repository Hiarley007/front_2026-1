function InputMatricula({ erro, ...rest }) {
  return (
    <>
      <label htmlFor="matricula" className="mt-5 font-semibold">Matrícula</label>
      <input
        placeholder="Digite sua Matrícula"
        className="border border-solid border-gray-900 border-2 p-2 rounded-lg"
        type="number"
        id="matricula"
        {...rest}
      />
      <p className="text-red-700">{erro}</p>
    </>
  );
}
export default InputMatricula;