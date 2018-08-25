class Factory {
    static getInstance(value) {
        if(value === 'FillCircleElement') {
            return new FillCircleElement();
        }

        if(value === 'StrokeCircleElement') {
            return new StrokeCircleElement();
        }

        if(value === 'ConcentricCircleElement') {
            return new ConcentricCircleElement();
        }

        if(value === 'OverlappingCircleElement') {
            return new OverlappingCircleElement();
        }

        if(value === 'HalfCircleElement') {
            return new HalfCircleElement();
        }

        if(value === 'ArcElement') {
            return new ArcElement();
        }

        if(value === 'PetalsElement') {
          return new PetalsElement();
        }

        if(value === 'DotFillElement'){
          return new DotFillElement();
        }

        throw new Error(`Could not instantiate ${value}`);
    }
}
