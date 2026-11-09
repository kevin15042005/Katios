import {
  TypingText,
  TypingTextCursor,
} from "@animate-ui/react/primitives/texts/typing";

export default function TextoEscrito({
  texto,
  inicial = "",
  claseInicial = "",
  velocidad = 35,
  retraso = 0,
  cursor = true,
  claseCursor = "bg-amber-500",
  className = "",
}) {
  return (
    <span className={`grid ${className}`}>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {inicial && <strong className={claseInicial}>{inicial}</strong>}
        {texto}
      </span>
      <span className="col-start-1 row-start-1">
        {inicial && <strong className={claseInicial}>{inicial}</strong>}
        <TypingText text={texto} duration={velocidad} delay={retraso} inView>
          {cursor && (
            <TypingTextCursor
              className={`ml-1 h-6! w-1! rounded-full ${claseCursor}`}
              variants={{ blinking: { opacity: 0, transition: { duration: 0.4 } } }}
            />
          )}
        </TypingText>
      </span>
    </span>
  );
}
