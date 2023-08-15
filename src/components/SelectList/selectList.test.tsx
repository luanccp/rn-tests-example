import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      { id: "1", name: "Porto", latitude: 123, longitude: 456 },
      { id: "2", name: "Lisboa", latitude: 900, longitude: 678 },
    ];

    const onPress = jest.fn()

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/Porto/i)
    // it's calling the onPress
    fireEvent.press(selectedCity)
    
    // check the parameters
    expect(onPress).toBeCalledWith(data[0])
  });

  it("should NOT be show options when data prop is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() =>{}} />);

    const options = screen.getByTestId("options")
    expect(options.children).toHaveLength(0)
  })
});
